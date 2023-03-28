open sftp://%1%:%2%@79.133.182.230/ -hostkey="ssh-rsa 3072 5qrDQiJO1pKKih3vR7TC/gDywG87UqYolKyhWcMFc0M"
cd /home/%1%/shop_be/public
call mkdir ../admin 2>/dev/null || :
call mkdir ../jsons 2>/dev/null || :
call cp -rf admin ../admin 2>/dev/null || :
call cp -f *.json ../jsons/ 2>/dev/null || :
call rm -rf * 2>/dev/null || :
call mv ../admin admin 2>/dev/null || :
call mv ../jsons/*.json ./ 2>/dev/null || :
put public.7z
call 7z x public.7z -y
call rm -f public.7z
exit