import Link from 'next/link'
import MainLayout from '@layouts/MainLayout'
import PageMeta from '@components/PageMeta';
import { Config } from '@utils/Config';

export default function Custom404(){
  return (
    <MainLayout>
      <PageMeta 
          title="404 - Page Not Found"
          description="You&apos;ve reached a page that may have been deleted or perhaps it never existed in the first place."
          url={Config.pageMeta.notFound.url}
      />
      <h1>404</h1>
      <h2>You've reached a page that may have been deleted or perhaps it never existed in the first place.</h2>
      <p><Link href="/">Click here to go home</Link></p>
    </MainLayout>
  )
}