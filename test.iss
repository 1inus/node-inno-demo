
var
  MainPanelAnimated: Boolean;
  AnimationTimer: LongWord;

procedure AnimationTimerProc(
  H: LongWord; Msg: LongWord; IdEvent: LongWord; Time: LongWord);
var
  L: Integer;
begin
  L := WizardForm.MainPanel.Left + ScaleX(5);
  if L > 0 then
  begin
    L := 0;
    KillTimer(0, AnimationTimer);
  end;
  WizardForm.MainPanel.Left := L;
end;

procedure CurPageChanged(CurPageID: Integer);
var
  HoverTimerCallback: LongWord;
begin
  if WizardForm.OuterNotebook.ActivePage = WizardForm.InnerPage then
  begin
    if not MainPanelAnimated then
    begin
      HoverTimerCallback := WrapTimerProc(@AnimationTimerProc, 4);
      AnimationTimer := SetTimer(0, 0, 5, HoverTimerCallback);
      WizardForm.MainPanel.Left := -WizardForm.MainPanel.Width;
      MainPanelAnimated := True;
    end;
  end;
end;