import { Facebook, X } from "../icons/svgs";

const SocialShare = ({ url, title }: { url: string; title: string }) => {
  const shareText = `Check out this article: ${title}`;

  return (
    <div className="flex space-x-2">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(shareText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full text-gray-700 hover:text-blue-400 transition-colors"
        aria-label="Share on Twitter"
      >
        <X />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full text-gray-700 hover:text-blue-400 transition-colors"
        aria-label="Share on Facebook"
      >
        <Facebook />
      </a>
    </div>
  );
};

export default SocialShare;
