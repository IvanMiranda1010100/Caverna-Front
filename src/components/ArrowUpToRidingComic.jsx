import React from 'react';

export const ArrowUpToSVG = ({className}) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-4.98 3.66l-.163 .01l-.086 .016l-.142 .045l-.113 .054l-.07 .043l-.095 .071l-.058 .054l-4 4l-.083 .094a1 1 0 0 0 1.497 1.32l2.293 -2.293v5.586l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.089 -.064l-.113 -.062l-.081 -.034l-.113 -.034l-.112 -.02l-.098 -.006z" />
    </svg>
  );
}

export const ArrowTopComic = ({ theme }) => {
  const buttonStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#333' : '#fff',
    border: 'none',
    borderRadius: '50%',
    padding: '10px',
    cursor: 'pointer',
    zIndex: '1000',
    position: 'fixed',
    left: '20px',
    bottom: '20px'
  };

  return (
    <button style={buttonStyle} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <ArrowUpToSVG className={'size-10'} />
    </button>
  );
};
