function Counter({ end, suffix = "", title }) {
  return (
    <div>
      <h3 className="text-3xl lg:text-4xl font-bold text-violet-400">
        {end}
        {suffix}
      </h3>

      <p className="text-gray-400 mt-2">
        {title}
      </p>
    </div>
  );
}

export default Counter;