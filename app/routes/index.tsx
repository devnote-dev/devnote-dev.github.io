import NavBar from '~/components/NavBar';

export default function () {
  return (
    <main>
      <NavBar home />
      <div className="grid grid-cols-2 gap-x-10 m-12 font-[Roboto Medium,monospace]">
        <div>
          <h1 className="mb-4 font-bold text-4xl uppercase">About Me</h1>
          <p>
            My name is Devaune Whittle, you may know me online as Devonte or
            "devnote" (parody name). I am a software developer from the UK
            working on various open&ndash;source and commercial projects which you can
            find on my GitHub. In my spare time, I'm a hobbyist photographer and
            athletics enthusiast (although I'm not very good at it). I am also
            experimenting with videography for personal projects and potential
            collaborative projects, at some point these will be available on
            this website too.
          </p>
        </div>
        <div>
          <h1 className="mb-4 font-bold text-4xl uppercase">Contacts</h1>
          <ol>
            <li className="flex flex-wrap">
              <p className="font-bold uppercase">Gmail •&nbsp;</p>
              <a
                className="underline hover:text-cyan-500 visited:text-purple-500"
                href="mailto:devnote.dev75@gmail.com"
              >
                devnote.dev75@gmail.com
              </a>
              &nbsp;(dev)
            </li>
            <li className="flex flex-wrap">
              <p className="font-bold uppercase">Gmail •&nbsp;</p>
              <a
                className="underline hover:text-cyan-500 visited:text-purple-500"
                href="mailto:dkwhittle4@gmail.com"
              >
                dkwhittle4@gmail.com
              </a>
              &nbsp;(work)
            </li>
            <li className="flex flex-wrap">
              <p className="font-bold uppercase">LinkedIn •&nbsp;</p>
              <a
                className="underline hover:text-cyan-500 visited:text-purple-500"
                href="https://www.linkedin.com/in/devaune-w-10bb55233"
              >
                Devaune W
              </a>
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
