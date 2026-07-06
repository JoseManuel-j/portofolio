import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="max-w-7xl mx-auto px-8 py-24"
    >
      <p className="uppercase tracking-[4px] text-violet-400">
        Achievement
      </p>

      <h2 className="text-5xl font-bold mt-3">
        Certificates
      </h2>

      <p className="text-gray-400 mt-5 max-w-xl">
        Beberapa sertifikat yang saya peroleh selama mempelajari
        pengembangan web dan teknologi.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {certificates.map((item, index) => (
          <div
            key={index}
            className="
              bg-[#0E1326]
              rounded-3xl
              overflow-hidden
              border
              border-white/10
              hover:border-violet-500
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <img
              src={item.image}
              alt={item.title}
              className="
                w-full
                h-52
                object-cover
              "
            />

            <div className="p-6">
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {item.issuer}
              </p>

              <p className="text-violet-400 mt-1">
                {item.year}
              </p>

              <a
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-block
                  mt-5
                  text-violet-400
                  hover:text-violet-300
                  transition-colors
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