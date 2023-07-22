import Footer from '~/components/Footer';
import NavBar from '~/components/NavBar';

const messages = [
  {
    alt: 'hacker-typing-hacking-computer-codes-gif',
    path: 'hacker-typing-hacking-computer-codes.gif',
    message:
      'This page is still under construction while I figure out how to CSS.',
  },
  {
    alt: 'math-hmm-processing-gif',
    path: 'math-hmm-processing.gif',
    message:
      "Page under construction, I'm still figuring out how to format images in tailwind CSS...",
  },
  {
    alt: 'fast-man-run-and-stare-gif',
    path: 'fast-man-run-and-stare.gif',
    message:
      "You thought there would be an actual photography page here, didn't you?",
  },
];

export default function () {
  const num = Math.random() * 12;
  let res: { alt: string; path: string; message: string };

  if (num > 9) {
    res = messages[2];
  } else if (num > 6) {
    res = messages[1];
  } else {
    res = messages[0];
  }

  return (
    <main className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
      <NavBar photography />
      <div className="m-12 font-[Roboto Medium,monospace]">
        <h1 className="mb-4 font-bold text-4xl uppercase">Photography</h1>
        <p className="mb-4">{res.message}</p>
        <img alt={res.alt} src={res.path} width={500} height={500} />
      </div>
      <Footer />
    </main>
  );
}
