import Link from "next/link";
import SOCIALS from "@/constants/socials";

const Socials = () => {
  const socials = SOCIALS;

  return (
    <>
      {socials.map((soc) => (
        <Link
          href={soc.link}
          target="_blank"
          className="btn btn-outline btn-circle btn-sm flex justify-center items-center "
          key={soc.name}
        >
          <div className="*:size-4">{soc.icon}</div>
        </Link>
      ))}
    </>
  );
};

export default Socials;
