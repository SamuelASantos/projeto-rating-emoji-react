import { Rating } from "@/components/Rating";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Rating
        value={5}
      />
    </div>
  );
}