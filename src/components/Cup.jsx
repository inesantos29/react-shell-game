

export const Cup = ({ handleResult, box, level, position, jackpot }) => {
  return (
    <div
      onClick={handleResult}
      className={`${box} ${level} ${position} h-12 w-12 bottom-14 cursor-pointer flex box1 absolute leading-10 bg-gray-100 text-gray-700 `}
    >
      <div className={jackpot ? jackpot : null}></div>
    </div>
  )
}