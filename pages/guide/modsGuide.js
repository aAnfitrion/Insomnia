import Layout from '../../components/Layout.js'

export default function ModsGuide() {
  return (
    <Layout title='Insomnia - Guía para moderadores'>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          <div>
            <h2>Introducción</h2>
            <p>
              Esta es la guía para moderadores del servidor Insomnia. Los moderadores internos deben aprender toda esta guía antes de comenzar con sus labores.
              Si eres un usuario del servidor, también te es útil leer esta guía. Así conoces tus derechos en el servidor, y puedes quejarte si encuentras que algún moderador es corrupto.
            </p>
          </div>
          <div>
            <h2>Reglas de los moderadores</h2>
            <p>
              La sanción mínima por incumplir una de estas reglas, es la degradación del moderador. La sanción máxima por incumplir una de estas reglas, es ser baneado de Insomnia.
            </p>
            <table class='table'>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>No abusarás de tu poder.</th>
                  <th>2</th>
                  <th>Aceptarás tus errores.</th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>No filtrarás información condifencial.</th>
                  <th>4</th>
                  <th>Mejorarás tu ortografía.</th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>No menospreciarás a nadie.</th>
                  <th>6</th>
                  <th>Harás cumplir las reglas del servidor.</th>
                </tr>
                <tr>
                  <th>7</th>
                  <th>Serás honesto con tu equipo.</th>
                  <th>8</th>
                  <th>Serás leal a Insomnia, porque Insomnia te será leal a ti.</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='mt-4 mb-4'>
            <h2>Guía de comandos</h2>
            <p>La guía de comandos de moderación. En la que () es opcional, mientras que [] es obligatorio.</p>
            <table class='table'>
              <thead>
                <tr>
                  <th>Comando</th>
                  <th>Efecto</th>
                  <th>Permiso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>/warn [usuario] [motivo]</th>
                  <th>Añade una sanción en el registro del usuario.</th>
                  <th>Moderadores internos, Moderadores y Jefes de moderación.</th>
                </tr>
                <tr>
                  <th>/ban [usuario] [motivo]</th>
                  <th>Banea a un usuario del servidor.</th>
                  <th>Moderadores y Jefes de moderación.</th>
                </tr>
                <tr>
                  <th>/clear (usuario) [cantidad]</th>
                  <th>Borra los mensajes de un canal.</th>
                  <th>Moderadores y Jefes de moderación.</th>
                </tr>
                <tr>
                  <th>/tempmute [usuario] [duración] [motivo]</th>
                  <th>Silencia temporalmente a un usuario.</th>
                  <th>Moderadores y Jefes de moderación.</th>
                </tr>
                <tr>
                  <th>/unban [usuario]</th>
                  <th>Desbanea a un usuario del servidor.</th>
                  <th>Jefes de moderación.</th>
                </tr>
                <tr>
                  <th>/kick [usuario] [motivo]</th>
                  <th>Expulsa a un usuario del servidor.</th>
                  <th>Moderadores y Jefes de moderación.</th>
                </tr>
                <tr>
                  <th>/unmute [usuario]</th>
                  <th>Desmutea a un usuario.</th>
                  <th>Jefes de moderación.</th>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Guías de sanciones</h2>
          <div>
            <p>
              Esta es la guía de los moderadores para aplicar sanciones. 
            </p>
          </div>
          <table class='table border'>
            <thead>
              <tr>
                <th scope='col'>Motivo</th>
                <th scope='col'>Primera acción</th>
                <th scope='col'>Si se repite</th>
                <th scope='col'>Sanción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Repetir (flood).</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Silenciar durante 3 días.</th>
              </tr>
              <tr>
                <th>Spam en el servidor.</th>
                <th>Borrar mensaje y advertir al usuario.</th>
                <th>Borrar mensaje y silenciar al usuario durante 3 días.</th>
                <th>Banear al usuario.</th>
              </tr>
              <tr>
                <th>Spam al md.</th>
                <th>Banear al usuario.</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Toxicidad.</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Silenciar durante 7 días.</th>
              </tr>
              <tr>
                <th>Doxeo.</th>
                <th>Banear al usuario.</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Compartir contenido NSFW.</th>
                <th>Banear al usuario.</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Violar los terminos y/o principios de la comunidad</th>
                <th>Banear al usuario.</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Muros de texto.</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Silenciar durante 3 días.</th>
              </tr>
              <tr>
                <th>No hablar en español.</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Borrar mensajes y advertir al usuario.</th>
                <th>Silenciar durante 3 días.</th>
              </tr>
              <tr>
                <th>Reproducir audios, hacer sonidos molestos o usar moduladores de voz.</th>
                <th>Advertir verbalmente al usuario.</th>
                <th>Silenciar durante 3 días.</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-1"></div>
      </div>
    </Layout>
  )
}
