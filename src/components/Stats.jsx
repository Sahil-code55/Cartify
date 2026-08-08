import React from 'react'

const Stats = () => {

    const stats = [
  {
    title: "Cart Items",
    value: 0,
    subtitle: "Items in bag",
    color: "lime",
  },
  {
    title: "Cart Value",
    value: "$0.00",
    subtitle: "Ready to checkout",
    color: "blue",
  },
  {
    title: "Top Products",
    value: 6,
    subtitle: "Highly rated",
    color: "yellow",
  },
  {
    title: "Categories",
    value: 6,
    subtitle: "To explore",
    color: "purple",
  },
];

  return (
   <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((item) => (
      <StatCard key={item.title} {...item} />
    ))}
  </section>
  )
}

export default Stats
