import {createPortal} from 'react-dom'

function PopupComponent({copied}) {
  return createPortal(
    <section>
      {copied && (
        <div style={{position: 'absolute', bottom: '3rem'}}>Copied to clipboard</div>
      )}
    </section>,
    document.querySelector('#popup-content')
  )
}

export default PopupComponent