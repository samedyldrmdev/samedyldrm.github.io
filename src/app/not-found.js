import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="h-full w-full fixed right-0 bottom-0 flex justify-center items-center bg-black text-background-dark ">
      <div className=" bg-background-light/90 rounded-3xl flex flex-col justify-center items-center text-center ">
        <div className="flex w-full h-full text-lg p-5 justify-end items-end">
          {/* FontAwesome ikonunu içeren div */}
          <div className="cursor-pointer w-4 hover:text-red-500">
            <Link href="/">
              <FontAwesomeIcon icon={faXmark} />
            </Link>
          </div>
        </div>
        <div className="py-28 px-12 md:px-48 lg:px-96">
          <h1 className="font-bold text-9xl p-12">404!</h1>
          <h2 className="text-2xl">Oops! You're a Bit Lost! 🚀</h2>
          <p>
            Sorry, we couldn't find the page you're looking for. <br /> Looks
            like you're a bit lost! <br /> What would you like to do?
            <br />
            <br />
            Here's a magical formula to find your way back: <br />{" "}
          </p>
          <div className="m-4">
            <Link
              className="hover:bg-text-light hover:text-black p-2 rounded-lg bg-background-dark text-white hover:shadow-black hover:shadow-lg"
              href="/"
            >
              Go Back to Home! 🏠
            </Link>
          </div>
          <div className="fixed right-0 top-0 invert -z-10 opacity-50">
            <Image
              src={"/images/notFoundBg.gif"}
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
