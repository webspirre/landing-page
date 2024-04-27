import Video from "next-video";
import getStarted from "/videos/saas.mp4";

export default function Page() {
  return <Video src={getStarted} className="rounded-md" />;
}
