import Footer from '~/components/Footer';
import NavBar from '~/components/NavBar';

export default function () {
  return (
    <main className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
      <NavBar />
      <div className="m-12 font-[Roboto Medium,monospace]">
        <h1 className="mb-4 font-bold text-4xl uppercase">
          Experience • <span className="text-[#EC915C]">Zig</span>
        </h1>
        <div className="grid gap-y-4">
          <p>
            Conceptually, Zig is entirely different to any other language that I
            have used. I don't come from a system level programming background,
            nor do I have much experience with manual memory management (and no,
            Rust does not count as manual memory management) so it feels like
            starting from scratch. Nevertheless, the language had caught my eye
            almost from the moment I properly looked at it, so I'm quite happy
            that it hasn't been a challenge to get started with. I'm still
            grasping onto the fundemental concepts of manual memory management,
            but Zig has helped with that journey thus far and I am proud of my
            progress.
          </p>
          <p>
            That being said, Zig is still in its early days (no 1.0 release yet)
            and I have already been subject to a few reasonable breaking
            changes. This isn't really ideal when coming into the language, but
            I can't hold it against Zig, nor will I wait until a 1.0 release
            &mdash; who knows how long that will take? One of my other main
            concerns is with documentation which at present, is severely
            lacking. This is even true for Zig libraries by the community which
            has been the cause of long headaches and error messages too complex
            for me to understand. I hope that this improves over time as the
            language develops.
          </p>
          <p>
            Apart from those concerns, I have high hopes for Zig and aim to make
            good use of it in the future while growing in the systems
            programming space.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
