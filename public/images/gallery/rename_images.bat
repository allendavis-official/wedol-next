@echo off
setlocal enabledelayedexpansion
set count=1
for %%f in (*.jpg *.jpeg *.png *.gif *.bmp *.webp) do (
    echo Renaming "%%f" to image!count!.jpg
    ren "%%f" "image!count!.jpg"
    set /a count+=1
)
echo Renaming complete!
pause