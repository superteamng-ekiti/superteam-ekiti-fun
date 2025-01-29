import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./card";
export const ErrorScreen = ({
  title = "Something went wrong",
  description = "An error occurred while loading the content.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) => {
  return (
    <div className="w-full h-[50vh] flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-destructive">
            {title}
          </CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          {onRetry && (
            <Button variant="outline" onClick={onRetry} className="mt-2">
              Try Again
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
