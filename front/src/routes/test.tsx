import { createFileRoute } from '@tanstack/react-router';

//import { WheelEditPage } from '@/pages/WheelEditPage.tsx';
//import LoaderPage from '@/components/project/loaderPage.tsx';
//export const Route = createFileRoute('/test')({
//beforeLoad: async () => {
//if (import.meta.env.MODE === 'production') {
//throw redirect({
//to: '/login',
//});
//}
//},
//component: () => <LoaderPage />,
//});
import { Example } from '@/pages/Example';

export const Route = createFileRoute('/test')({
  component: () => <Example />,
});
