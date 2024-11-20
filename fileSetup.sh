### replace duplicate files with hardlinks to avoid out-of-sync changes; symlinks don't work with build/execution ###

cd nodejs/files
for FILE in Brume.mjs events.mjs logger.mjs peerMsgEncDec.mjs
do
	rm ../../web/files/${FILE}
	ln ${FILE} ../../web/files/${FILE}
done
