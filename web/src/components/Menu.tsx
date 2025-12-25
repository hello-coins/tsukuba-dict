import { IconBrandGithubFilled } from '@tabler/icons-react';

export default function Menu() {
  return (
    <div className="w-full bg-black text-white text-4xl font-bold py-3 px-5 flex items-center justify-between">
      筑波大学用語辞典 WEB版
      <a href="https://github.com/hello-coins/tsukuba-dict">
        <IconBrandGithubFilled color="white" size={30} />
      </a>
    </div>
  );
}
