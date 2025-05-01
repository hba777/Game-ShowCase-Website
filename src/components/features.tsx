import { PropsWithChildren, useRef, useState } from "react";

interface BentoTiltProps {
  className?: string;
}

const BentoTilt = ({
  children,
  className = "",
}: PropsWithChildren<BentoTiltProps>) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  src: string;
  title: React.ReactNode;
  description?: string;
}

const BentoCard = ({ src, title, description }: BentoCardProps) => {
  return (
    <article className="relative size-full">
      <img
        src={src}
        alt="Feature"
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-light-foreground dark:text-dark-foreground">
        <div>
          <h1 className="bento-title special-font font-bold text-light-foreground dark:text-dark-foreground">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-xl md:text-base text-light-foreground dark:text-dark-foreground">
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
};

export const Features = () => {
  return (
    <section className="bg-light-background dark:bg-dark-background pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32 text-light-foreground dark:text-dark-foreground">
          <p className="font-circular-web text-lg text-light-foreground dark:text-dark-foreground">
            America, 1899. The end of the Wild West era has begun. After a
            robbery goes badly wrong in the western town of Blackwater, Arthur
            Morgan and the Van der Linde gang are forced to flee. With federal
            agents and the best bounty hunters in the nation massing on their
            heels, the gang must rob, steal, and fight their way across the
            rugged heartland of America in order to survive. As deepening
            internal divisions threaten to tear the gang apart, Arthur must make
            a choice between his own ideals and loyalty to the gang who raised
            him.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="/Game-ShowCase-Website/img/feature-1.jpg" // Make sure the image is inside the public folder
            title={
              <>
                Black<b>w</b>ater
              </>
            }
            description="The botched heist that set everything in motion. A town that echoes with regret, betrayal, and fading loyalty."
          />
        </BentoTilt>

        <div
          id="nexus"
          className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7"
        >
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="/Game-ShowCase-Website/img/feature-2.jpg" // Ensure image is in public folder
              title={
                <>
                  Va<b>n</b> der Linde
                </>
              }
              description="Outlaws with a cause—or so they believed. The gang that once stood for freedom, slowly unraveling at the seams."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="/Game-ShowCase-Website/img/feature-3.png"
              title={
                <>
                  Art<b>h</b>ur
                </>
              }
              description="A loyal enforcer caught in the middle of moral chaos. His journey is one of reflection, redemption, and reckoning."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="/Game-ShowCase-Website/img/feature-4.jpg"
              title={
                <>
                  The <b>W</b>ild
                </>
              }
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};
