import React, {useContext, useReducer} from 'react'

const ImageModalContext = React.createContext()

export const useImageModal = () => {
    return useContext(ImageModalContext)
}

const src = '';

const reducer = (state, action) => {
  switch (action.type) {
    case src: return {...state, img: src}
    default: return state
  }
}
  

const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        img: src,
    })
  
    const setSrc = (src) => {
        dispatch({ type: src })
        console.log(src)
    }
  
    return (
      <ImageModalContext.Provider value={{
        img: state.img,
        setSrc
      }}>
          { children }
      </ImageModalContext.Provider>
    )
  }

export default ModalProvider