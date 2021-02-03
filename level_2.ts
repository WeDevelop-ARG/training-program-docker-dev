import { bg, b, log, buy, sleep } from './helpers.ts'

export default async function level2 () {
  log('')
  log(bg('Congratulations!'), b('You finished Level 1:'), 'configuring an environment variable.')
  log('')
  log('')
  log(b('-> LEVEL 2:'), 'writing a file from inside a container.')
  log('')
  log('- Take a look again at the current directory. We\'ve created a new file named "file.txt".')
  log('- Although this file is visible on your File System, it was created from inside this Docker container.')
  log('- Files created from a container have a different owner and, if you want to edit them, you should either:')
  log('  - Change their owner to your own account.')
  log('  - Edit them from inside the Docker container.')
  log('  - (Not recommended) Use the "sudo" command to edit as the superuser.')
  log('- In this level, we ask you to', b('write the contents "LEVEL_2" in the "level_2.txt" file.'))
  log('- To do so,', buy('edit the file from inside the container.'))
  log('-', b('TIP:'), 'you\'ll need to use the "docker exec" command.')
  log('-', b('TIP:'), 'you can use any standard command from Ubuntu inside the container! For example, you could use the "vi" command to write to the file.')
  log('')
  log('Waiting for file contents to be written... (Press Ctrl + C to exit)')

  const fileName = 'level_2.txt'
  const expectedContentRegEx = /^LEVEL_2/

  Deno.writeTextFileSync(fileName, '')

  while (true) {
    const contents = Deno.readTextFileSync(fileName)

    if (expectedContentRegEx.test(contents)) break;

    await sleep(1000)
  }

  Deno.removeSync(fileName)

  log('')
  log('')
  log(bg('Congratulations!'), b('You finished Level 2:'), 'writing a file from inside a container.')
  log('')
  log('')
  log(b('-> LEVEL 3.1:'), 'enabling the Frontend.')
  log('')
  log('- Take a look again at the "docker-compose.yaml" file.')
  log('- We\'ve changed it to run a Frontend web server on port 3000 by default.')
  log('- Run "docker-compose up" again to start the Frontend Development Environment.')
  log('- Then, navigate to the URL indicated on the console after the initialization is done.')
  log('-', b('TIP:'), 'if the port 3000 is being used by another process, you can change it with the "PORT" environment variable.')
  log('')

  Deno.renameSync('./docker-compose.yaml', 'docker-compose.intro.yaml')
  Deno.renameSync('./docker-compose.level_3.yaml', 'docker-compose.yaml')
}