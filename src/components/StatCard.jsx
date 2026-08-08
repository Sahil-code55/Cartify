import React from "react";

const StatCard = ({
  icon,
  value,
  title,
  subtitle,
  iconBg,
  iconColor,
}) => {
  
  return (
    <div
      style={{ padding: "1.9rem" }}
      className="flex h-40 items-start gap-5 rounded-3xl border border-white/20
      bg-[#111111] transition-all duration-300 hover:border-white/40"
    >
      {/* Icon */}
      <div
        style={{ backgroundColor: iconBg }}
        className="flex h-16 w-16 items-center justify-center rounded-2xl"
      >
        <span
          style={{ color: iconColor }}
          className="text-3xl"
        >
          {icon}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold text-white">
          {value}
        </h2>

        <p
          style={{ marginTop: "4px" }}
          className="text-xl font-medium text-zinc-300"
        >
          {title}
        </p>

        <span
          style={{ marginTop: "6px" }}
          className="text-base text-zinc-500"
        >
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default StatCard;