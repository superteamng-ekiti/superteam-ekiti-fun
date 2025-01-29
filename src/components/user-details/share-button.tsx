import { Button } from "@/components/ui/button";
import { TwitterShareButton } from "react-share";

interface ShareButtonProps {
  url: string;
  title: string;
}

export const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  return (
    <TwitterShareButton url={url} title={title}>
      <Button size="sm" variant="secondary">
        Share on
        <img
          src="/src/assets/images/twitter.svg"
          alt="twitter"
          className="w-5 h-5"
        />
      </Button>
    </TwitterShareButton>
  );
};
