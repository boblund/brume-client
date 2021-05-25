# brume-client

## Brume Overview

Brume provides a shared directoy service in which any file plaed in a directoy on a user's device is automtically shared with specified Brume users. File sharing is directly between user devices without traversing a central server. The only central component is the Brume signaling server required to setup user-to-user connections.

Brume is distinguished from other peer-to-peer file sharing, such as File Pizza and WormHole.io in that Brume runs in the background keeping shared folders in-sync as the the contents change; kind of like a dropbox without a server and across multiple user endpoints.

Brume shared content is organized by ```groups```. A Brume ```user```, the ```owner```of a ```group``` adds content to the ```group``` that is shared with other ```users``` who are ```members``` of the group. Sharing is one way - from the ```owner``` to the ```members```. Below is a simple example where Bob shares Bob/group/file with Alice and Alice shares Alice/group/file with Bob. 

```
BrumeFiles-Bob/            BrumeFiles-Alice/
├── Alice                  ├── Alice
│   └── group              │   └── group
│       └── file           │       ├── file                          
├── Bob                    │       └── .members
│   └── group              ├── Bob
│       ├── file           │   └── group
│       └── .members       │       └── file
└── .wsserver.json         └── .wsserver.json
```
Note that Bob/group/file is distinct from Alice/group/file; the combination ```user/group``` uniquely identifies shared content. Also note that file can be a folder containing a hierarchy of files and folders.

Actions (add, delete, modify) on the the content of the group by the owner are automatically reflected in each member of the group. Members *may* delete or modify content shared with them but this **will not** be reflected at the ower and these changes will be undone the next time the content of the group is synchronized. Group content is synchronized when either the owner or member Brume client is started.

Special file .members contains the name of members for each group. File .wsserver contains information required to connect to the Brume service

Figure 1 is a graphical representation of the example described above.    

<br/>
<center><img src="./fig1.png"><br/><h3>Figure 1</h3></center>

## Getting started

### Create a Brume account

Create a Brume account at brume.occams.solutions. You will need to create a username, select an account type and supply your email address and credit card (if you create a non-free account).

You will receive an email with your account configuration information that is needed to install Brume.

### Install Brume

```
git clone brume-client
cd brume-client
npm install
mkdir ~/Brume
mkdir -p ~/.config/Brume
cp your_brume_config ~/.config/Brume/brume.conf
```

If ```/usr/local/bin/brume-client``` does not exist do the following four steps.

```
sudo mkdir -p /usr/local/lib/brume
cp -r *.js node_modules /usr/local/lib/brume/
sudo ln -s /usr/local/lib/brume/brume-client.js /usr/local/bin/brume-client
sudo chmod 755 /usr/local/bin/brume-client
```

Install a per user systemd service that will start (and restart) the brume-client as a daemon when the user is logged in.

```
mkdir -p ~/.config/systemd/user
ln -s $PWD/services/linux/brume-client.service $HOME/.config/systemd/user/brume-client.service
systemctl --user enable brume-client
systemctl --user start brume-client
```

Check the daemon status with ```systemctl --user status brume-client```.
Log output can be viewed by ```journalctl --user-unit brume-client```. 

## Brume architecture
<br/>
<br/>
<center><img src="./BrumeArchitecture.png"><br/><h3>Brume Architecture</h3></center>
