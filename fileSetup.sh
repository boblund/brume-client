### replace duplicate files with hardlinks to avoid out-of-sync changes; symlinks don't work with build/execution ###

cd nodejs/files
for DIR in web webview
do
	for FILE in Brume.mjs cognitoAuth.mjs events.mjs logger.mjs peerMsgEncDec.mjs
	do
		rm ../../${DIR}/files/${FILE}
		ln ${FILE} ../../${DIR}/files/${FILE}
	done
done

cd ../../web/files
for FILE in  brume-elements.mjs index.css main.mjs simplepeer.min.js v4brumeLogin.mjs
do
	rm ../../webview/files/${FILE}
	ln ${FILE} ../../webview/files/${FILE}
done
