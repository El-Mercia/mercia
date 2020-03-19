# DIVERS
cd <chemin du dossier>										#de déplacer
node <nom du fichier>										#lancer un script node

# GIT
git init 													#initialiser un projet git
git add <nom du fichier / dossier>							#ajouter les modifications au prochain commit
git commit -m <message à attacher au commit>				#sauvegarde les modifications précedemment ajoutées
git status													#affiche l'état de mon projet git à cet instant
git log														#affiche l'historique des commits
git restore <nom du fichier / dossier> 						#remet le contenu du fichier au dernier commit
git checkout <nom d une branche ou hash du commit>          #déplace la tête de lecture (HEAD) sur la branche
git branch <nom de la branche>								#crée une branche en copiant la branche actuelle
git branch  												#liste les branches existantes

<<<<<<<< HEAD (current chenge)
git merge <nom de la branche> -m "message du commit"		#fusionne la branche nommé à l'interieure de la branche

>>>>>>>> gitmemo (incoming change)