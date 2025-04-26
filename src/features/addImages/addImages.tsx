import { Button } from '@/shared/ui/button';
import { cn, generateFileUrl } from '@/shared/utils';
import { CircleX, Paperclip } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';
import style from './addImages.module.css';

interface AddImagesProps {
  className?: string;
  ad_pk: string | null;
}
interface Preview {
  id: string;
  url: string;
  file: File;
}
export const AddImages = ({ className = '', ad_pk }: AddImagesProps) => {
  const [previews, setPreviews] = useState<Preview[]>([]);
  const [toShow, setToShow] = useState(4);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (!newFiles) return;
    const newPreviews = Array.from(newFiles).map((el) => {
      return {
        id: self.crypto.randomUUID(),
        url: generateFileUrl(el),
        file: el,
      };
    });
    setPreviews([...previews, ...newPreviews]);
  };

  const handleDeleteFile = (id: string) =>
    setPreviews([...previews.filter((el) => el.id !== id)]);

  useEffect(() => {
    if (ad_pk && previews.length > 0) {
      //здесь будет отправка файлов на сервер
      const uploadFiles = async () => {
        await Promise.all(
          previews.map(async (el) => {
            const formData = new FormData();
            formData.append('photo', el.file);

            try {
              const response = await fetch(
                `/site/ads/business-housing/${ad_pk}/images/`,
                {
                  method: 'POST',
                  body: formData,
                }
              );
              const result = await response.json();
              console.log(`✅ Файл загружен`, result);
            } catch (error) {
              console.error(`❌ Ошибка загрузки:`, error);
            }
          })
        );
      };

      uploadFiles();
    }
  }, [ad_pk]);
  return (
    <div className={style.container}>
      <label htmlFor='imgAdd' className={cn(style.addImages, '', className)}>
        <Paperclip width={19} height={19} />
        <span>Загрузить фотографии</span>
        <input
          onChange={handleFileChange}
          style={{ display: 'none' }}
          id='imgAdd'
          type='file'
          accept='image/*'
          multiple
        />
      </label>
      <div className={style.previewsContainer}>
        <div className={style.previews}>
          {previews.slice(0, toShow).map((el) => (
            <div key={el.id} className={style.previewImg}>
              <CircleX
                onClick={() => handleDeleteFile(el.id)}
                width={15}
                height={15}
                className={style.deleteIcon}
              />
              <Image width={45} height={45} alt={el.file.name} src={el.url} />
            </div>
          ))}
        </div>
        {previews.length > 0 && toShow < previews.length && (
          <Button
            onClick={() => setToShow(previews.length)}
            className='text-teal'
            variant='link'
            size='fit'
          >
            {`${previews.length} фото`}
          </Button>
        )}
      </div>
    </div>
  );
};
