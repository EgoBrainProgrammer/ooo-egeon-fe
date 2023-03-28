start /B /wait build.cmd
echo "BUILD DONE! UPLOADING..."
::del /f public.7z 2>&1>NUL
::cd dist
::"C:\Program Files\7-Zip\7z" a -mx9 ../public
::cd ..
::"C:\Program Files (x86)\WinSCP\WinSCP.com" /ini=nul /script=uploadscript.cmd /parameter shop uw51_mRx8