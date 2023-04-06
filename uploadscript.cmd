open sftp://%1%:%2%@151.248.122.7/ -hostkey="ssh-rsa 3072 wTIRAYg366AK+7qm1su/eueZYX2Gc5f3r4VG1g0Du28"
cd /home/%1%/ooo-egeon-be/public
call mkdir ../jsons 2>/dev/null || :
call cp -f *.json ../jsons/ 2>/dev/null || :
call rm -rf * 2>/dev/null || :
call mv ../jsons/*.json ./ 2>/dev/null || :
put public.7z
call 7z x public.7z -y
call rm -f public.7z
call ~/ooo-egeon-be/admscripts/stop.sh
exit