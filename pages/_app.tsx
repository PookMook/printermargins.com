import "~/styles/reset.css";
import "~/styles/fullpage.css";
import { withErrorBoundary } from "~/components/errorHandling/errorBoundary";
import { ErrorMessage } from "~/components/errorHandling/errorMessage";

const ErrorMessageWithErrorBoundary = withErrorBoundary(ErrorMessage);
export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorMessageWithErrorBoundary>
      <Component {...pageProps} />
    </ErrorMessageWithErrorBoundary>
  );
}
