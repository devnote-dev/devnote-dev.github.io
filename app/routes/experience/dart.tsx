import Footer from '~/components/Footer';
import NavBar from '~/components/NavBar';

export default function () {
  return (
    <main className="grid min-h-[100svh] grid-rows-[auto_1fr_auto]">
      <NavBar />
      <div className="m-12 font-[Roboto Medium,monospace]">
        <h1 className="mb-4 font-bold text-4xl uppercase">
          Experience • <span className="text-[#00B4AB]">Dart</span>
        </h1>
        <div className="grid gap-y-4">
          <p>
            Dart is a very interesting language... I was caught by it's
            Java&ndash;like design and simplicity, in fact, it was one of the
            reasons I learned the language. I had heard about the new and
            powerful language for writing cross-platform applications, and
            the&nbsp;
            <a
              className="underline hover:text-cyan-500 visited:text-purple-500"
              href="https://dart.dev"
            >
              language's landing page
            </a>
            &nbsp;was all I needed to get started with it. When writing general
            applications, I found Dart to be a joy and actively tried to find
            projects to write in Dart. The type system was like none I had seen
            before, and the level of control I had felt powerful. Eventually I
            was tempted into using Flutter, the framework Dart is really known
            for.
          </p>
          <p>
            Flutter is <em>the</em> framework for cross-platform application
            development, being used in many different professional environments.
            I decided to take a shot at it and was quickly stopped by a
            rediculously long installation process. When it was finally ready, I
            copied the design instructions from the tutorial I was following and
            went to get the app running which was significantly faster and took
            less time. And just like that, I had an app up an running! It wasn't
            the most thrilling experience but still a fun one nonetheless. From
            there I experiemented with different styles, in particular with the
            Cupertino library for iOS styles (yes, I am an Apple user, deal with
            it). However, an eerie feeling was building up the more I used these
            different styles...
          </p>
          <p>
            The issue became apparent the more I looked into existing Flutter
            codebases: applications that had multiple target platforms (for
            example, iOS and Android devices) also had parts of their codebase
            split into different parts for those specific platforms. I wasn't a
            fan of this. Wouldn't one benefit more from simply maintaining two
            different codebases rather than trying to house it under one? I
            guess that's really a matter of preference, but it's undeniable that
            having duplicate code just to handle styles (and independent
            operations) for different targets isn't ideal in most cases. Another
            less noticable but definitely more concerning issue was the level of
            component nesting needed for even basic styles, let alone complex
            ones. Forced named parameters seems to be the convention for the
            framework and Flutter libraries with only adds to the code noise,
            and this doesn't seem to have gotten better since I last used
            Flutter. Because of these reasons, I decided not to pursue Flutter
            development &mdash; writing applications in native code seemed much
            more practical (Java/Kotlin for Android, Swift for iOS, etc.)
          </p>
          <p>
            So my experience with Flutter wasn't the best, but I can still use
            Dart for other things, right? Not really. Outside of application
            development, Dart is not known for much. It was marketed as "the new
            JavaScript" at one point which didn't last long and for good
            reasons. In terms of actual web development, Dart doesn't seem to
            directly support it out of the box.&nbsp;
            <a
              className="underline hover:text-cyan-500 visited:text-purple-500"
              href="https://dart.dev/tutorials/web/get-started"
            >
              The official guide
            </a>
            &nbsp;even states that enabling the <code>webdev</code> tool is
            required to run web applications. This is much more work than
            getting a simple web application up with NodeJS or Deno and requires
            far less dependencies. I hope that Dart can expand its horizons in
            the future, it's a very capable language with nice syntax and a
            great type system. I still use Dart from time to time, but if I am
            ever asked to create a cross-platform application, I would think
            twice about Flutter.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
