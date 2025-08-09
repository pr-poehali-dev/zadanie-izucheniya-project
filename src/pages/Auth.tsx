import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Auth = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleLogin = (method: string) => {
    alert(`Вход через ${method} пока в разработке. Следите за обновлениями в нашем Telegram: https://t.me/+QgiLIa1gFRY4Y2Iy`);
  };

  const handleRegister = () => {
    alert('Регистрация пока в разработке. Следите за обновлениями в нашем Telegram: https://t.me/+QgiLIa1gFRY4Y2Iy');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center">
            <Icon name="BookOpen" size={32} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">TaskHub</h1>
          <p className="text-gray-600">Добро пожаловать в мир программирования</p>
        </div>

        <Card className="shadow-xl">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Войти</TabsTrigger>
              <TabsTrigger value="register">Регистрация</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <CardHeader>
                <CardTitle>Вход в аккаунт</CardTitle>
                <CardDescription>
                  Войдите в свой аккаунт, чтобы продолжить обучение
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Social Login Buttons */}
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-3 h-12"
                    onClick={() => handleLogin('Google')}
                  >
                    <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    Войти через Google
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-3 h-12"
                    onClick={() => handleLogin('ВКонтакте')}
                  >
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VK</span>
                    </div>
                    Войти через ВКонтакте
                  </Button>
                </div>

                <div className="relative">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-2 text-sm text-gray-500">или</span>
                  </div>
                </div>

                {/* Email/Phone Login */}
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="email">Email</TabsTrigger>
                    <TabsTrigger value="phone">Телефон</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="email" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email адрес</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="example@mail.com"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Пароль</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      />
                    </div>
                    <Button className="w-full" onClick={() => handleLogin('email')}>
                      <Icon name="Mail" size={16} className="mr-2" />
                      Войти по email
                    </Button>
                  </TabsContent>
                  
                  <TabsContent value="phone" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+7 (999) 123-45-67"
                        value={loginData.phone}
                        onChange={(e) => setLoginData({...loginData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-phone">Пароль</Label>
                      <Input 
                        id="password-phone" 
                        type="password" 
                        placeholder="••••••••"
                        value={loginData.password}
                        onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      />
                    </div>
                    <Button className="w-full" onClick={() => handleLogin('телефон')}>
                      <Icon name="Phone" size={16} className="mr-2" />
                      Войти по телефону
                    </Button>
                  </TabsContent>
                </Tabs>

                <div className="text-center">
                  <Button variant="link" className="text-sm text-purple-600">
                    Забыли пароль?
                  </Button>
                </div>
              </CardContent>
            </TabsContent>

            <TabsContent value="register">
              <CardHeader>
                <CardTitle>Создать аккаунт</CardTitle>
                <CardDescription>
                  Присоединяйтесь к сообществу программистов
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Social Registration */}
                <div className="space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-3 h-12"
                    onClick={() => handleLogin('Google')}
                  >
                    <div className="w-5 h-5 bg-red-500 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">G</span>
                    </div>
                    Регистрация через Google
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center gap-3 h-12"
                    onClick={() => handleLogin('ВКонтакте')}
                  >
                    <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VK</span>
                    </div>
                    Регистрация через ВКонтакте
                  </Button>
                </div>

                <div className="relative">
                  <Separator />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="bg-white px-2 text-sm text-gray-500">или заполните форму</span>
                  </div>
                </div>

                {/* Registration Form */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя и фамилия</Label>
                    <Input 
                      id="name" 
                      placeholder="Иван Петров"
                      value={registerData.name}
                      onChange={(e) => setRegisterData({...registerData, name: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email адрес</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      placeholder="example@mail.com"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-phone">Номер телефона</Label>
                    <Input 
                      id="register-phone" 
                      type="tel" 
                      placeholder="+7 (999) 123-45-67"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({...registerData, phone: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <Input 
                      id="register-password" 
                      type="password" 
                      placeholder="••••••••"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Повторите пароль</Label>
                    <Input 
                      id="confirm-password" 
                      type="password" 
                      placeholder="••••••••"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                    />
                  </div>
                  
                  <Button className="w-full" onClick={handleRegister}>
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Создать аккаунт
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    Регистрируясь, вы соглашаетесь с{' '}
                    <Button variant="link" className="h-auto p-0 text-xs text-purple-600">
                      условиями использования
                    </Button>{' '}
                    и{' '}
                    <Button variant="link" className="h-auto p-0 text-xs text-purple-600">
                      политикой конфиденциальности
                    </Button>
                  </p>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Development Notice */}
        <Card className="mt-4 border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Icon name="Info" size={20} className="text-amber-600" />
              <div>
                <p className="text-sm font-medium text-amber-800">
                  🚧 Авторизация в разработке
                </p>
                <p className="text-xs text-amber-700 mt-1">
                  Следите за обновлениями в нашем{' '}
                  <a 
                    href="https://t.me/+QgiLIa1gFRY4Y2Iy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline font-medium"
                  >
                    Telegram канале
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;