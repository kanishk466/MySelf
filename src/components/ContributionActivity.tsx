// import React, { useEffect, useState } from "react";

// interface ContributionDay {
//   date: string;
//   contributionCount: number;
// }

// interface Week {
//   contributionDays: ContributionDay[];
// }

// interface ContributionActivityProps {
//   username: string;
//   token: string; // GitHub Personal Access Token
// }

// const ContributionActivity: React.FC<ContributionActivityProps> = ({ username, token }) => {
//   const [weeks, setWeeks] = useState<Week[]>([]);

//   useEffect(() => {
//     const fetchContributions = async () => {
//       const query = `
//         query {
//           user(login: "${username}") {
//             contributionsCollection {
//               contributionCalendar {
//                 weeks {
//                   contributionDays {
//                     date
//                     contributionCount
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `;

//       try {
//         const res = await fetch("https://api.github.com/graphql", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//           body: JSON.stringify({ query }),
//         });
//         const json = await res.json();
//         const weeksData = json.data.user.contributionsCollection.contributionCalendar.weeks;
//         setWeeks(weeksData);
//       } catch (error) {
//         console.error("Error fetching GitHub contributions:", error);
//       }
//     };

//     fetchContributions();
//   }, [username, token]);

//   const getBgColor = (count: number): string => {
//     if (count === 0) return "bg-gray-100 dark:bg-gray-800";
//     if (count <= 2) return "bg-[#39d353]/20";
//     if (count <= 4) return "bg-[#39d353]/40";
//     if (count <= 6) return "bg-[#39d353]/70";
//     return "bg-[#39d353]";
//   };

//   return (
//     <div className="mt-12">
//       <h3 className="text-lg font-medium mb-4">Contribution Activity</h3>
//       <div className="border border-gray-200 dark:border-gray-700 rounded-md p-4 bg-white dark:bg-[#161b22]">
//         <div className="grid grid-cols-52 gap-1">
//           {weeks.map((week, weekIndex) => (
//             <div key={weekIndex} className="grid grid-rows-7 gap-1">
//               {week.contributionDays.map((day, dayIndex) => (
//                 <div
//                   key={dayIndex}
//                   className={`w-3 h-3 rounded-sm ${getBgColor(day.contributionCount)}`}
//                   title={`${day.contributionCount} contributions on ${day.date}`}
//                 />
//               ))}
//             </div>
//           ))}
//         </div>
//         <div className="mt-2 flex justify-end items-center text-xs text-gray-500 dark:text-gray-400">
//           <span className="mr-1">Less</span>
//           <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800 mr-1"></div>
//           <div className="w-3 h-3 rounded-sm bg-[#39d353]/20 mr-1"></div>
//           <div className="w-3 h-3 rounded-sm bg-[#39d353]/40 mr-1"></div>
//           <div className="w-3 h-3 rounded-sm bg-[#39d353]/70 mr-1"></div>
//           <div className="w-3 h-3 rounded-sm bg-[#39d353] mr-1"></div>
//           <span>More</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContributionActivity;



import React, { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface ContributionActivityProps {
  username: string;
  token: string;
}

const ContributionActivity: React.FC<ContributionActivityProps> = ({ 
  username = "octocat", 
  token = "demo-token" 
}) => {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [totalContributions, setTotalContributions] = useState(0);

  // Generate demo data for preview
  const generateDemoData = () => {
    const demoWeeks: Week[] = [];
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364); // ~52 weeks

    for (let weekIndex = 0; weekIndex < 52; weekIndex++) {
      const week: Week = { contributionDays: [] };
      
      for (let dayIndex = 0; dayIndex < 7; dayIndex++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + weekIndex * 7 + dayIndex);
        
        // Generate realistic contribution pattern
        const contributionCount = Math.random() > 0.7 ? 
          Math.floor(Math.random() * 12) : 0;
        
        week.contributionDays.push({
          date: currentDate.toISOString().split('T')[0],
          contributionCount
        });
      }
      demoWeeks.push(week);
    }
    return demoWeeks;
  };

  useEffect(() => {
    const fetchContributions = async () => {
      setLoading(true);
      setError(null);

      // For demo purposes, simulate API call
      setTimeout(() => {
        try {
          const demoData = generateDemoData();
          setWeeks(demoData);
          
          // Calculate total contributions
          const total = demoData.reduce((sum, week) => 
            sum + week.contributionDays.reduce((weekSum, day) => 
              weekSum + day.contributionCount, 0), 0
          );
          setTotalContributions(total);
          
          setLoading(false);
        } catch (err) {
          setError("Failed to load contribution data");
          setLoading(false);
        }
      }, 1000);

      /* Real API implementation:
      const query = `
        query {
          user(login: "${username}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const res = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });
        
        if (!res.ok) throw new Error('Failed to fetch');
        
        const json = await res.json();
        const calendarData = json.data.user.contributionsCollection.contributionCalendar;
        setWeeks(calendarData.weeks);
        setTotalContributions(calendarData.totalContributions);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
        setError("Failed to load contribution data");
        setLoading(false);
      }
      */
    };

    fetchContributions();
  }, [username, token]);

  const getBgColor = (count: number): string => {
    if (count === 0) return "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700";
    if (count <= 2) return "bg-green-200 dark:bg-green-900/50 border border-green-300 dark:border-green-800";
    if (count <= 4) return "bg-green-300 dark:bg-green-800/70 border border-green-400 dark:border-green-700";
    if (count <= 8) return "bg-green-400 dark:bg-green-700 border border-green-500 dark:border-green-600";
    return "bg-green-500 dark:bg-green-600 border border-green-600 dark:border-green-500";
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getMonthLabels = () => {
    const months = [];
    const today = new Date();
    
    for (let i = 11; i >= 0; i--) {
      const date = new Date(today.getFullYear(), today.getMonth() - i, 1);
      months.push({
        name: date.toLocaleDateString('en-US', { month: 'short' }),
        position: (11 - i) * 4.33 // Approximate position
      });
    }
    return months;
  };

  if (loading) {
    return (
      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contribution Activity
          </h3>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-52 gap-1">
              {Array.from({ length: 52 }).map((_, weekIndex) => (
                <div key={weekIndex} className="grid grid-rows-7 gap-1">
                  {Array.from({ length: 7 }).map((_, dayIndex) => (
                    <div
                      key={dayIndex}
                      className="w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-sm"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
          <div className="flex items-center">
            <div className="text-red-600 dark:text-red-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="ml-3 text-sm text-red-800 dark:text-red-200">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Contribution Activity
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {totalContributions.toLocaleString()} contributions in the last year
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
        {/* Month labels */}
        <div className="relative mb-2">
          <div className="grid grid-cols-52 gap-1 text-xs text-gray-500 dark:text-gray-400">
            {getMonthLabels().map((month, index) => (
              <div key={index} className="col-span-4 text-left">
                {index % 2 === 0 ? month.name : ''}
              </div>
            ))}
          </div>
        </div>

        {/* Day labels */}
        <div className="flex mb-2">
          <div className="grid grid-rows-7 gap-1 text-xs text-gray-500 dark:text-gray-400 mr-2">
            <div></div>
            <div>Mon</div>
            <div></div>
            <div>Wed</div>
            <div></div>
            <div>Fri</div>
            <div></div>
          </div>
          
          {/* Contribution grid */}
          <div className="grid grid-cols-52 gap-1">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="grid grid-rows-7 gap-1">
                {week.contributionDays.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm transition-all duration-200 hover:scale-125 cursor-pointer ${getBgColor(day.contributionCount)}`}
                    title={`${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${formatDate(day.date)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Contributions for @{username}
          </div>
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span className="mr-2">Less</span>
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"></div>
              <div className="w-3 h-3 rounded-sm bg-green-200 dark:bg-green-900/50 border border-green-300 dark:border-green-800"></div>
              <div className="w-3 h-3 rounded-sm bg-green-300 dark:bg-green-800/70 border border-green-400 dark:border-green-700"></div>
              <div className="w-3 h-3 rounded-sm bg-green-400 dark:bg-green-700 border border-green-500 dark:border-green-600"></div>
              <div className="w-3 h-3 rounded-sm bg-green-500 dark:bg-green-600 border border-green-600 dark:border-green-500"></div>
            </div>
            <span className="ml-2">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributionActivity;