import { Newsletter } from '../Newsletter';
import { ThemeProvider } from '../ThemeProvider';

export default function NewsletterExample() {
  return (
    <ThemeProvider>
      <Newsletter />
    </ThemeProvider>
  );
}
