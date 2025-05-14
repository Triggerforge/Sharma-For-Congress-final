import { ShieldCheckIcon, FlagIcon, ScaleIcon } from "@heroicons/react/24/solid";

export default function IssuesSection() {
  const issues = [
    {
      icon: <ShieldCheckIcon className="w-10 h-10 text-red-600" />,
      title: "PRO-CONSTITUTION",
      description: "Fighting to protect your constitutional rights and individual liberties.",
    },
    {
      icon: <FlagIcon className="w-10 h-10 text-red-600" />,
      title: "PRO-AMERICA",
      description: "Standing strong for American values, security, and economic freedom.",
    },
    {
      icon: <ScaleIcon className="w-10 h-10 text-red-600" />,
      title: "LAW & ORDER",
      description: "Supporting law enforcement and ensuring safety in every community.",
    },
  ];

  return (
    <section className=" py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
        {issues.map((issue, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4">
            {issue.icon}
            <h3 className="text-xl font-heading font-extrabold text-indigo-950 uppercase">
              {issue.title}
            </h3>
            <p className="text-neutral-700 font-medium">{issue.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
