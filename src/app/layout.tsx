import type {Metadata} from 'next';
import '@/assets/css/reset.css';
import '@/assets/css/styles.css';
import MetaTags from '@/components/layout/meta-tags';
import Alert from '@/components/alert';
import Loading from '@/components/loading';
import LayoutSub from '@/app/layout-sub';
import Footer from '@/components/layout/footer';

export const metadata: Metadata = {
  title: 'kaisa',
  description: ''
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
    <MetaTags/>
    <body>
    <LayoutSub>{children}</LayoutSub>
    <Footer/>
    <Alert/>
    <Loading/>
    </body>
    </html>
  );
}
