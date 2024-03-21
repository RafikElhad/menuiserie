import React from "react";
import {motion} from 'framer-motion' 

const Contact = () => {
    return(
        <> 
        <br/> 
        <motion.div 
        className="page-content"
         initial={{ opacity: 0}}
         animate = {{ opacity: 1}}
         exit = {{ opacity: 0}}  
        >
          <h1>Contact</h1> 
            <p>
              Bootstrap est un Framework frontal gratuit pour un développement Web plus rapide et plus facile. <br/> 
              Bootstrap comprend des modèles de conception basés sur HTML et CSS pour la typographie, les formulaires, les boutons, les tableaux, la navigation, les modaux, les carrousels d'images et bien d'autres, ainsi que des plugins JavaScript facultatifs.<br/> 
              Bootstrap vous donne également la possibilité de créer facilement des conceptions réactives. 
          </p>
        </motion.div>
          
        </> 
    )
}

export default Contact