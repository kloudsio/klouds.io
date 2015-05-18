T1 := gnome-terminal --geometry=40x40+0+000 -e
T2 := gnome-terminal --geometry=40x40+200+0 -e

.PHONY: all dev gnome nvm
default: nvm dev

nvm:
	nvm use
dev:
	nodemon -i client

gnome:
	@$(T2) make\ -C\ client
	@$(T1) make\ dev
