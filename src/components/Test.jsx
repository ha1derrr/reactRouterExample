import { useLoaderData } from "react-router-dom";

function Test() {
  const data = useLoaderData();
  return (
    <>
      <div>Followers: {data.followers}</div>
      <div>Bio: {data.bio}</div>
      <img
        src={data.avatar_url}
        alt="image"
        className="w-50 border-2 rounded-full"
      />
    </>
  );
}

export const GetInfo = async () => {
  const response = await fetch("https://api.github.com/users/ha1derrr");
  return response.json();
};

export default Test;
