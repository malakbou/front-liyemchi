import React, { useState } from "react";
import axios from "axios";
import { useStateContext } from "../../contexts/ContextProvider";
import prof from "./profile.module.css";
import Avatar from '@mui/material/Avatar';


function Profile() {
  const [image, setImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, header } = useStateContext();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const uploadProfilePicture = async () => {
    console.log(image);
    try {
      if (!image) {
        setErrorMessage("Please select an image.");
        return;
      }

      const formData = new FormData();
      formData.append("image", image);
      console.log(image);

      const res = await axios.post(
        "http://127.0.0.1:8000/api/uploadProfilePicture",
        formData.append('_method', 'PUT'),
        header
      );
      setSuccessMessage("Profile picture uploaded successfully.");
      console.log(res);
    } catch (error) {
      console.log(error.response.data);
      setErrorMessage("Failed to upload profile picture.");
    }
  };

  const updateProfilePicture = async () => {
    try {
      if (!image) {
        setErrorMessage("Please select an image.");
        return;
      }
      const formData = new FormData();
      formData.append("image", image);
      await axios.put(
        "http://127.0.0.1:8000/api/updateProfilePicture",
        formData,
        header
      );
      setSuccessMessage("Profile picture updated successfully.");
    } catch (error) {
      setErrorMessage("Failed to update profile picture.");
    }
  };

  const deleteProfilePicture = async () => {
    try {
      await axios.delete(
        "http://127.0.0.1:8000/api/deleteProfilePicture",
        header
      );
      setSuccessMessage("Profile picture deleted successfully.");
    } catch (error) {
      setErrorMessage("Failed to delete profile picture.");
    }
  };


  function toggleAffichage(idInput) {
    var x = document.getElementById(idInput);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
   }

  return (
//     <div>

//         <div className={prof.avatar}>
//             <Avatar alt="Nom Utilisateur" src="/images/grilpng.png" />
//         </div>
        
//       <div className={prof.top_prof_div}>
//        <div className={prof.email_adress_bloc}> 
//             <div className={prof.adres}>
//                 <label className={prof.adres_text}  for="adresse">Adresse </label>
//                 <input className={prof.adres_input} type="text" id="adresse" name="adresse">
//                 </input>
//             </div>
//             <div className={prof.emailo}>
//                  <label className={prof.emailo_text} for="email">Email </label>
//                  <input className={prof.emailo_input} type="email" id="email" name="email"></input>
//             </div>
//         </div>
//             <div className={prof.num_telf}>
//                 <label className={prof.num_telf_text} for="numero">Numéro de téléphone </label>
//                 <input className={prof.num_telf_input} type="tel" id="numero" name="numero"></input>
//             </div>
//         </div>


//             <div className={prof.confirme_modifier_motdepasse}> 
//                 <span className={prof.modifier_mot_passe}> Modifier Mot de passe</span>
//                 <hr className={prof.ligne_orange}></hr>
           

//             <div className={prof.ancien_new_motdepasse}> 
//              <div className={prof.motdepasse}>
//                <div className={prof.key_motdepasse}><img src="/images/key.png" alt="Description de l'image"></img> </div>
//                 <label className={prof.num_telf_text} for="motDePasse">Ancien Mot de passe </label>
//                 <input className={prof.num_telf_input} type="password" id="motDePasse" name="motDePasse"></input>
                
//               </div>
//                <div className={prof.new_motdepasse}>
//                <div className={prof.key_new_motdepasse}><img src="/images/key.png" alt="Description de l'image"></img> </div>
//                 <label className={prof.num_telf_text} for="nouveauMotDePasse">Nouveau mot de passe </label>
//                 <input className={prof.num_telf_input} type="password" id="nouveauMotDePasse" name="nouveauMotDePasse"></input>
//                 {/* <input type="checkbox" onclick={toggleAffichage} > Afficher mot de passe </input> */}
//               </div>
//              </div>
//              <div className={prof.confirme_motdepasse}>
//                <div className={prof.key_confirme_motdepasse}><img src="/images/key.png" alt="Description de l'image"></img> </div>
//                 <label className={prof.confirmer_pastext} for="modifierMotDePasse">Confirmer le mot de passe </label>
//                 <input className={prof.num_telf_input} type="password" id="modifierMotDePasse" name="modifierMotDePasse"></input>
//                 {/* <input type="checkbox" onclick={toggleAffichage}> Afficher mot de passe </input> */}
//              </div>
//             </div>

//             <div className={prof.enregistrer_infos}>
//                   <button className={prof.btn_enreg} type="submit">
//                     Enregistrer {" "}
//                   </button>
//             </div>
//     </div>






        <div>
            <h2>Profile Picture Upload</h2>
            <input type="file" onChange={handleImageChange} />
            <button onClick={uploadProfilePicture}>Upload</button>
            <button onClick={updateProfilePicture}>Update</button>
            <button onClick={deleteProfilePicture}>Delete</button>
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
  );
}

export default Profile;

{
  /* 
        // <div>
        //     <h2>Profile Picture Upload</h2>
        //     <input type="file" onChange={handleImageChange} />
        //     <button onClick={uploadProfilePicture}>Upload</button>
        //     <button onClick={updateProfilePicture}>Update</button>
        //     <button onClick={deleteProfilePicture}>Delete</button>
        //     {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        //     {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        // </div> */
}
