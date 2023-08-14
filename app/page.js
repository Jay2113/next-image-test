import Image from "next/image";
import amplifyPic from "../public/amplify.png";

export default function Home() {
  return <Image src={amplifyPic} alt="Amplify Marketing Page" />;
}
