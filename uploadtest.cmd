start /B /wait build.cmd
echo "BUILD DONE! UPLOADING..."
"C:\Program Files (x86)\WinSCP\WinSCP.com" /ini=nul /script=uploadscript.cmd /parameter user password