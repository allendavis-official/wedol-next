import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Users,
  HandHeart,
  HeartHandshake,
  Leaf,
} from "lucide-react";
import newsItems from "../data/newsData";

export default function ProgramActivities() {
  // Map program keys to display info
  const programMap = {
    advocacy: {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Women's Rights Advocacy",
      color: "emerald",
    },
    empowerment: {
      icon: <Users className="h-5 w-5" />,
      title: "Empowerment & Education",
      color: "blue",
    },
    peacebuilding: {
      icon: <HandHeart className="h-5 w-5" />,
      title: "Peacebuilding",
      color: "purple",
    },
    livelihood: {
      icon: <HeartHandshake className="h-5 w-5" />,
      title: "Livelihood & Skills Training",
      color: "orange",
    },
    agriculture: {
      icon: <Leaf className="h-5 w-5" />,
      title: "Agriculture & Food Security",
      color: "green",
    },
  };

  // Group activities by program
  const activitiesByProgram = {};
  newsItems.forEach((item) => {
    if (item.program && programMap[item.program]) {
      if (!activitiesByProgram[item.program]) {
        activitiesByProgram[item.program] = [];
      }
      activitiesByProgram[item.program].push(item);
    }
  });

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-2">
          Recent Activities
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Programs in Action
        </h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          See how our programs are making a difference in communities across
          Liberia.
        </p>

        <div className="mt-12 space-y-12">
          {Object.entries(activitiesByProgram).map(
            ([programKey, activities]) => {
              const program = programMap[programKey];
              return (
                <div key={programKey}>
                  {/* Program Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-content-center">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {program.title}
                    </h3>
                  </div>

                  {/* Activities Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                      <article
                        key={activity.id}
                        className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        {/* Thumbnail */}
                        {activity.images && activity.images.length > 0 && (
                          <div className="relative h-40 w-full bg-gray-200">
                            <Image
                              src={activity.images[0]}
                              alt={activity.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>
                        )}

                        <div className="p-5">
                          <p className="text-xs font-semibold text-emerald-700">
                            {activity.date}
                          </p>
                          <h4 className="mt-1 font-semibold text-gray-900 text-sm">
                            {activity.title}
                          </h4>
                          <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                            {activity.excerpt}
                          </p>
                          <Link
                            href={`/news/${activity.id}`}
                            className="mt-3 inline-block text-emerald-700 font-semibold text-sm hover:text-emerald-800"
                          >
                            Read more →
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
