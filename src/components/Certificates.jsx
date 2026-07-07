import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="
        max-w-[1400px]
        mx-auto
        px-6
        md:px-10
        lg:px-12
        xl:px-16
        pt-10
        pb-24
      "
    >
      {/* HEADER */}
      <div className="max-w-2xl">
        <p
          className="
            uppercase
            tracking-[0.3em]
            text-violet-400
            text-sm
            md:text-base
            font-medium
          "
        >
          Achievement
        </p>

        <h2
          className="
            text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            mt-3
            tracking-tight
          "
        >
          Certificates
        </h2>

        <p
          className="
            text-gray-400
            mt-4
            max-w-xl
            text-base
            md:text-lg
            leading-8
          "
        >
          Beberapa sertifikat yang saya peroleh selama mempelajari
          pengembangan web dan teknologi.
        </p>
      </div>

      {/* CERTIFICATE GRID */}
      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-10
        "
      >
        {certificates.map((item, index) => (
          <div
            key={index}
            className="
              group
              bg-[#0E1326]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              hover:border-violet-500
              hover:-translate-y-2
              hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]
              transition-all
              duration-500
            "
          >
            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-52
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                "
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  leading-snug
                "
              >
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.issuer}
              </p>

              <p className="text-violet-400 mt-1 font-medium">
                {item.year}
              </p>

              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  mt-5
                  text-violet-400
                  font-medium
                  hover:text-violet-300
                  hover:translate-x-1
                  transition-all
                  duration-300
                "
              >
                View Certificate →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;