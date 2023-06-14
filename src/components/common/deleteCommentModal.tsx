'use client';

import { useUserPostStore } from '@/stores/postsStore';
import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { shallow } from 'zustand/shallow';
import Button from './button';
import ModalWrapper from './modalWrapper';
import Spinner from './spinner';

interface IDelete {
  postId: string;
  commentId: string;
  showDeleteCommentModal: boolean;
  handleDeleteCommentModal: () => void;
}

export default function DeleteCommentModal({
  postId,
  commentId,
  showDeleteCommentModal,
  handleDeleteCommentModal,
}: IDelete) {
  const [deleteComment] = useUserPostStore((state) => [state.deleteComment], shallow);
  const [isLoading, setIsLoading] = useState(false);

  async function handleDeleteComment() {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 3000));
    try {
      const res = await axios.patch(`${process.env.API_URL}/posts/${postId}/comments/delete/${commentId}`);
      handleDeleteCommentModal();
      setIsLoading(false);
      deleteComment(postId, commentId);
      toast.success(res.data.message);
    } catch (error) {
      // wip error handling
      toast.error(error as string);
    }
  }

  return (
    <>
      {showDeleteCommentModal && (
        <ModalWrapper showModal={showDeleteCommentModal} title='Hapus Komentar' toggleModal={handleDeleteCommentModal}>
          <h2 className='text-base'>
            Anda yakin ingin menghapus komentar ini? Tindakan ini akan menghapus komentar ini secara permanen dan tidak
            dapat dipulihkan.
          </h2>
          <div className='mt-4 flex w-full justify-end gap-4'>
            <Button type='button' color='outline' onClick={handleDeleteCommentModal}>
              Tutup
            </Button>
            <Button
              type='button'
              disabled={isLoading}
              color={isLoading ? 'loading' : 'delete'}
              onClick={handleDeleteComment}
            >
              {isLoading ? (
                <div className='flex items-center gap-2'>
                  <Spinner size='sm' width='light' />
                  <span>Loading...</span>
                </div>
              ) : (
                'Hapus'
              )}
            </Button>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
