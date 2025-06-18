# How to Edit Hosts File for Multi-Tenant Testing

## Windows

### Method 1: Using Notepad as Administrator
1. **Press `Windows + R`** to open Run dialog
2. **Type `notepad`** and press `Ctrl + Shift + Enter` (this opens Notepad as Administrator)
3. **Click "Yes"** when prompted by User Account Control
4. **In Notepad, click File → Open**
5. **Navigate to**: `C:\Windows\System32\drivers\etc\`
6. **Change file type** from "Text Documents (*.txt)" to "All Files (*.*)"
7. **Select the `hosts` file** and click Open
8. **Add these lines** at the end of the file:
   ```
   127.0.0.1 localhost
   127.0.0.1 acme.localhost
   127.0.0.1 techstart.localhost
   127.0.0.1 globaltech.localhost
   127.0.0.1 admin.localhost
   ```
9. **Save the file** (Ctrl + S)

### Method 2: Using Command Prompt as Administrator
1. **Press `Windows + X`** and select "Windows Terminal (Admin)" or "Command Prompt (Admin)"
2. **Run this command**:
   ```cmd
   echo 127.0.0.1 acme.localhost >> C:\Windows\System32\drivers\etc\hosts
   echo 127.0.0.1 techstart.localhost >> C:\Windows\System32\drivers\etc\hosts
   echo 127.0.0.1 globaltech.localhost >> C:\Windows\System32\drivers\etc\hosts
   echo 127.0.0.1 admin.localhost >> C:\Windows\System32\drivers\etc\hosts
   ```

## Mac

### Method 1: Using Terminal with nano
1. **Open Terminal** (Applications → Utilities → Terminal)
2. **Run this command**:
   ```bash
   sudo nano /etc/hosts
   ```
3. **Enter your password** when prompted
4. **Use arrow keys** to navigate to the end of the file
5. **Add these lines**:
   ```
   127.0.0.1 localhost
   127.0.0.1 acme.localhost
   127.0.0.1 techstart.localhost
   127.0.0.1 globaltech.localhost
   127.0.0.1 admin.localhost
   ```
6. **Press `Ctrl + X`** to exit
7. **Press `Y`** to save changes
8. **Press `Enter`** to confirm

### Method 2: Using Terminal with echo commands
1. **Open Terminal**
2. **Run these commands**:
   ```bash
   echo "127.0.0.1 acme.localhost" | sudo tee -a /etc/hosts
   echo "127.0.0.1 techstart.localhost" | sudo tee -a /etc/hosts
   echo "127.0.0.1 globaltech.localhost" | sudo tee -a /etc/hosts
   echo "127.0.0.1 admin.localhost" | sudo tee -a /etc/hosts
   ```

## Linux (Ubuntu/Debian)

### Method 1: Using nano
1. **Open Terminal**
2. **Run this command**:
   ```bash
   sudo nano /etc/hosts
   ```
3. **Enter your password** when prompted
4. **Add these lines** at the end:
   ```
   127.0.0.1 localhost
   127.0.0.1 acme.localhost
   127.0.0.1 techstart.localhost
   127.0.0.1 globaltech.localhost
   127.0.0.1 admin.localhost
   ```
5. **Press `Ctrl + X`** to exit
6. **Press `Y`** to save
7. **Press `Enter`** to confirm

### Method 2: Using echo commands
```bash
echo "127.0.0.1 acme.localhost" | sudo tee -a /etc/hosts
echo "127.0.0.1 techstart.localhost" | sudo tee -a /etc/hosts
echo "127.0.0.1 globaltech.localhost" | sudo tee -a /etc/hosts
echo "127.0.0.1 admin.localhost" | sudo tee -a /etc/hosts
```

## After Editing Hosts File

### Flush DNS Cache

**Windows:**
```cmd
ipconfig /flushdns
```

**Mac:**
```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

**Linux:**
```bash
sudo systemctl restart systemd-resolved
# or
sudo service network-manager restart
```

## Testing Your Setup

1. **Start your Next.js development server**:
   ```bash
   npm run dev
   ```

2. **Test these URLs in your browser**:
   - Main site: `http://localhost:3000`
   - Admin dashboard: `http://localhost:3000/dashboard`
   - Tenant sites:
     - `http://acme.localhost:3000`
     - `http://techstart.localhost:3000`
     - `http://globaltech.localhost:3000`

## Troubleshooting

### If subdomains don't work:
1. **Clear browser cache** (Ctrl+Shift+Delete)
2. **Try incognito/private mode**
3. **Restart your browser**
4. **Check if hosts file was saved correctly**
5. **Make sure there are no extra spaces or characters**

### If you get "Access Denied" on Windows:
1. **Make sure you're running as Administrator**
2. **Try disabling antivirus temporarily**
3. **Check if the hosts file is read-only** (right-click → Properties → uncheck Read-only)

### Alternative: Use Different Ports
If hosts file editing doesn't work, you can test tenant functionality using:
- `http://localhost:3000/tenant/acme`
- `http://localhost:3000/tenant/techstart`
- `http://localhost:3000/tenant/globaltech`

## Security Note

Remember to remove these entries from your hosts file when you're done testing, or they might interfere with real websites that use these domains.

To remove entries, simply delete the lines you added and save the file.