import video from '../assets/videoplayback.mp4'

function CarVideo() {
  return (
    <div className='w-full'>
        <div>
            <video src={video} className='w-full' autoPlay loop muted/>
        </div>
    </div>
  )
}

export default CarVideo