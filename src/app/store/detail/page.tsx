import Footer from '@/app/_components/footer';
import Header from '@/app/_components/header';
import PostProfile from '@/app/_components/PostProfile';
import { useState } from 'react';

const storeDetailPage = () => {
  const [storeStatus, setStoreStatus] = useState(false);
  const [announcementStatus, setAnnouncementStatus] = useState(false);
  return (
    <div>
      <Header />
      <div>
        {storeStatus ? (
          <div>
            {/*가게 프로필 카드 넣을 공간*/}
            {announcementStatus ? (
              <div>{/*등록된 공고 넣을 공간*/}</div>
            ) : (
              <PostProfile isExist={announcementStatus} type={'announcement'} />
            )}
          </div>
        ) : (
          <PostProfile isExist={storeStatus} type={'myStore'} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default storeDetailPage;
